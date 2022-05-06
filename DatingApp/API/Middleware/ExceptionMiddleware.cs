using System.Net;
using System.Text.Json;
using API.Errors;

namespace API.Middleware
{
    public class ExceptionMiddleware
    {
        private readonly RequestDelegate next;
        private readonly ILogger<ExceptionMiddleware> cl;
        private readonly IHostEnvironment env;
        public ExceptionMiddleware(RequestDelegate next, ILogger<ExceptionMiddleware> cl, IHostEnvironment env)
        {
            this.next = next;
            this.cl = cl;
            this.env = env;
        }

        public async Task InvokeAsync(HttpContext context)
        {
            try
            {
                await this.next(context);
            }
            catch(Exception ex)
            {
                this.cl.LogError(ex, ex.Message);
                context.Response.ContentType = "application/json";
                context.Response.StatusCode = (int) HttpStatusCode.InternalServerError;

                var response = this.env.IsDevelopment() ? new ApiExeption(context.Response.StatusCode, ex.Message, ex.StackTrace?.ToString())
                                                        : new ApiExeption(context.Response.StatusCode, "Internal server error");
                
                var options = new JsonSerializerOptions{PropertyNamingPolicy = JsonNamingPolicy.CamelCase};
                await context.Response.WriteAsync(JsonSerializer.Serialize(response, options));
            }
        }
    }
}