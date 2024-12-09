import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-api-data-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './api-data-page.component.html',
  styleUrls: ['./api-data-page.component.css']
})
export class ApiDataPageComponent implements OnInit {
  jokes: any[] = [];
  error = '';
  loading = true;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getJokes().subscribe({
      next: (jokes) => {
        this.jokes = jokes;
        this.loading = false;
      },
      error: (error) => {
        console.error('Error fetching jokes:', error);
        this.error = 'Failed to load jokes';
        this.loading = false;
      }
    });
  }
}