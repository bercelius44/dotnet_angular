import { Component, OnInit } from '@angular/core';
import { Member } from 'src/app/models/member';
import { MembersService } from 'src/app/services/members.service';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {
  members: Member[];
  personas: Member[] = [
    { username: "Lisa",
      gender: "female",
      knownAs: "Lisa",
      created: "2020-06-24",
      lastActive: "2020-06-21",
      introduction: "Sunt esse aliqua ullamco in incididunt consequat commodo. Nisi ad esse elit ipsum commodo fugiat est ad. Incididunt nostrud incididunt nostrud sit excepteur occaecat.\r\n",
      lookingFor: "Dolor anim cupidatat occaecat aliquip et Lorem ut elit fugiat. Mollit eu pariatur est sunt. Minim fugiat sit do dolore eu elit ex do id sunt. Qui fugiat nostrud occaecat nisi est dolor qui fugiat laborum cillum. Occaecat consequat ex mollit commodo ad irure cillum nulla velit ex pariatur veniam cupidatat. Officia veniam officia non deserunt mollit.\r\n",
      interests: "Sit sit incididunt proident velit.",
      city: "Greenbush",
      country: "Martinique"
    },
    {
      username: "Lisa",
      gender: "female",
      knownAs: "Mameste",
      created: "2020-06-24",
      lastActive: "2020-06-21",
      introduction: "Sunt esse aliqua ullamco in incididunt consequat commodo. Nisi ad esse elit ipsum commodo fugiat est ad. Incididunt nostrud incididunt nostrud sit excepteur occaecat.\r\n",
      lookingFor: "Dolor anim cupidatat occaecat aliquip et Lorem ut elit fugiat. Mollit eu pariatur est sunt. Minim fugiat sit do dolore eu elit ex do id sunt. Qui fugiat nostrud occaecat nisi est dolor qui fugiat laborum cillum. Occaecat consequat ex mollit commodo ad irure cillum nulla velit ex pariatur veniam cupidatat. Officia veniam officia non deserunt mollit.\r\n",
      interests: "Sit sit incididunt proident velit.",
      city: "Greenbush",
      country: "Martinique"
    }
  ];

  constructor(private memberService: MembersService) { }

  ngOnInit(): void {    
    this.loadMembers(); 
  }

  loadMembers() {
    this.memberService.getMembers().subscribe(members => {
      this.members = members;
    })
  }

}
