import { Component, DestroyRef, inject, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})
export class ServerStatusComponent implements OnInit {
  currentStatus: 'online' | 'offline' | 'unknown' = 'online';
  private destroyRef = inject(DestroyRef);
  
  constructor() {}

  ngOnInit() {
    const interval = setInterval(() => {
      const random = Math.random();
      if (random < 0.5) {
        this.currentStatus = 'online';
      } else if (random < 0.9) {
        this.currentStatus = 'offline';
      } else {
        this.currentStatus = 'unknown';
      }
      this.currentStatus = this.currentStatus === 'online' ? 'offline' : 'online';
      console.log('Server status changed to:', this.currentStatus);
    }, 5000);

    // this sets up the destroy listener to clear the interval when the component is destroyed
    // this is a callback function
    this.destroyRef.onDestroy(() => {
      clearInterval(interval);
    });
  }

  // ngOnDestroy(): void {
  //   clearTimeout(this.interval);
  // }
}
