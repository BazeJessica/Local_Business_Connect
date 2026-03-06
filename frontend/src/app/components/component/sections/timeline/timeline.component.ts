import { Component } from '@angular/core';

@Component({
  selector: 'app-timeline',
  standalone: false,
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.scss'
})
export class TimelineComponent {
  timeline = [
    { year: '2024', title: 'The Beginning', description: 'Founded with a mission to connect local businesses with their communities' },
    { year: '2024', title: 'First 1,000', description: 'Reached our first 1,000 business partners across 5 major cities' },
    { year: '2025', title: 'Mobile Launch', description: 'Launched iOS and Android apps, making bookings even more accessible' },
    { year: '2026', title: 'AI Integration', description: 'Introduced smart recommendations and automated customer matching' },
    { year: '2027', title: 'Global Expansion', description: 'Expanded to 50+ cities with multi-language support' },
    { year: '2028', title: 'Innovation Hub', description: 'Launching advanced analytics and business intelligence tools' }
  ];
}
