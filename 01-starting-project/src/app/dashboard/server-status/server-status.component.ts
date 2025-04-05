import { Component, DestroyRef, effect, inject, OnDestroy, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})
export class ServerStatusComponent implements OnInit {
  currentStatus = signal<'online' | 'offline' | 'unknown'>('offline');
  private destroyRef = inject(DestroyRef);
  
  constructor() {
    effect(() => {
      console.log('Server status changed to:', this.currentStatus());
    });
  }

  ngOnInit() {
    const interval = setInterval(() => {
      const random = Math.random();
      if (random < 0.5) {
        this.currentStatus.set('online');
      } else if (random < 0.9) {
        this.currentStatus.set('offline');
      } else {
        this.currentStatus.set('unknown');
      }
      this.currentStatus.set((this.currentStatus() === 'online') ? 'offline' : 'online');
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
