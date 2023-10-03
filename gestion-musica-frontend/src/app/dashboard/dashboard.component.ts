import { Component } from '@angular/core';
import { DetailMusic } from '../detail-music';
import { StyleMusicService } from '../services/style-music.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  details: DetailMusic[];
  selectedDetail: DetailMusic;
  message: string = '';
  isEmailRegistered: boolean = false;

  constructor(private musicService: StyleMusicService) {}

  ngOnInit(): void {
    this.surveyData();
  }

  private surveyData() {
    this.musicService.surveyData().subscribe((dato) => {
      this.details = dato;
    });
  }

  onSubmit() {
    const emailInput = document.getElementById('email') as HTMLInputElement;
    const enteredEmail = emailInput.value;
    const isEmailRegistered = this.details.some(
      (detail) => detail.email === enteredEmail
    );
    if (isEmailRegistered) {
      this.message = 'Correo electrónico registrado';
    } else {
      this.message = 'Correo electrónico no registrado';
    }
  }
}
