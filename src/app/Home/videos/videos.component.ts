import { Component, OnInit } from '@angular/core';
import { AjaxService, ResponseModel } from '../../service/ajax.service';
import 'bootstrap';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { VideoType } from '../../Provider/constrant';
import { FormsModule } from '@angular/forms';
declare var $:any;

@Component({
  selector: 'app-videos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './videos.component.html',
  styleUrl: './videos.component.scss'
})
export class VideosComponent implements OnInit {
  isPageReady: boolean = false;
  baseVideoUrl: string = "https://www.youtube.com/embed/";
  videosList: Array<YoutubeVideoModal> = [];
  chipClasses = ['chip-1', 'chip-2', 'chip-3', 'chip-4', 'chip-5', 'chip-6', 'chip-7', 'chip-8'];
  videoTypes = Object.values(VideoType);
  videoType: number = 0;
  videoTitle: string = "";

  constructor(private http: AjaxService,
              private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    $('[data-toggle="tooltip"]').tooltip();
    this.loadData();
  }

  loadData() {
    this.isPageReady = false;
    this.http.get("YoutubeVideo/GetAllVideos").subscribe({
      next: (res: ResponseModel)=> {
        this.videosList = res.ResponseBody;
        this.videosList.forEach(x => {
          x.VideoURL = this.sanitizer.bypassSecurityTrustResourceUrl(`${this.baseVideoUrl}` + x.YoutubeVideoId)
        })
        this.isPageReady = true;
      },
      error: err => {
        console.log(err);
        this.isPageReady = true;
      }
    });
  }

  getRandomColor(): string {
    const randomIndex = Math.floor(Math.random() * this.chipClasses.length);
    return this.chipClasses[randomIndex];
  }

  filterVideos(value:YoutubeVideoModal) {
    this.isPageReady = false;
    this.http.post("YoutubeVideo/FilterVideo", value).subscribe({
      next: (res: ResponseModel)=> {
        this.videosList = res.ResponseBody;
        this.videosList.forEach(x => {
          x.VideoURL = this.sanitizer.bypassSecurityTrustResourceUrl(`${this.baseVideoUrl}` + x.YoutubeVideoId)
        })
        this.isPageReady = true;
      },
      error: err => {
        console.log(err);
        this.isPageReady = true;
      }
    })
  }

  filterByVideoType() {
    let value: YoutubeVideoModal = {
      Title: "",
      Type: this.videoType,
      TypeName: "",
      VideoId: 0,
      VideoURL: "",
      YoutubeVideoId: ""
    };
    this.filterVideos(value);
  }

  filterByTitle() {
    let value: YoutubeVideoModal = {
      Title: this.videoTitle,
      Type: 0,
      TypeName: "",
      VideoId: 0,
      VideoURL: "",
      YoutubeVideoId: ""
    };
    this.filterVideos(value);
  }

  resetFilter() {
    this.videoType = 0;
    this.videoTitle = "";
    this.loadData();
  }

}

interface YoutubeVideoModal {
  VideoId: number,
  YoutubeVideoId: string,
  Title: string,
  Type: number,
  VideoURL: SafeUrl,
  TypeName: string
}