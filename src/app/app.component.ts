import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router'; // Importa RouterModule aquí

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'portfolio';
  isDark: boolean = false;
  changeBackgroundDark = () => {
    document.documentElement.style.setProperty('--primary-color', '#000000');
    document.documentElement.style.setProperty('--secundary-color', '#ffffff');
    document.documentElement.style.setProperty('background-color', '#1E1E1E');
    this.isDark = !this.isDark;
  };
  changeBackgroundLight = () => {
    document.documentElement.style.setProperty('--primary-color', '#ffffff');
    document.documentElement.style.setProperty('--secundary-color', '#080808');
    document.documentElement.style.setProperty('background-color', '#f1f0f6');
    this.isDark = !this.isDark;
  };
  redirectToHenry() {
    window.location.href =
      'https://certificates.soyhenry.com/new-cert?id=4432222a4b8fd516be97f5dc508eb387f95f4ede3ebbd6f753938b8458c4c406';
  }
  redirectToEnglish() {
    window.location.href = 'https://www.efset.org/cert/XdxFSS';
  }
  redirectToItc() {
    window.location.href = 'https://distanciaitc.com/verificacertif.html';
  }
}
