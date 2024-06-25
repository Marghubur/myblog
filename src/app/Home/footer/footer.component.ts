import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
    currentYear: number = new Date().getFullYear();
    socialMediaDetail: Array<SocialMedia> = [{
      Icon: "fa-brands fa-square-x-twitter",
      Link: "",
      Name: "Twitter"
    }, {
      Icon: "fa-brands fa-square-facebook",
      Link: "",
      Name: "Facebook"
    }, {
      Icon: "fa-brands fa-square-instagram",
      Link: "",
      Name: "Instagram"
    }, {
      Icon: "fa-brands fa-youtube",
      Link: "",
      Name: "Youtube"
    }, {
      Icon: "fa-brands fa-linkedin",
      Link: "",
      Name: "LinkedIn"
    }]
}

interface SocialMedia {
  Icon: string,
  Name: string,
  Link: string
}
