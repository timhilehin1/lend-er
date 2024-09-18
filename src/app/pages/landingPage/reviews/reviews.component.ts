import { Component } from '@angular/core';
import { ReviewsCardComponent } from '../../../components/Reusables/reviews-card/reviews-card.component';

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [ReviewsCardComponent],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.scss',
})
export class ReviewsComponent {
  customerReviews = [
    {
      id: 1,
      date: '01/08/2024',
      reviewerName: 'John Doe',
      reviewerInitials: 'JD',
      content:
        'I was in a tough spot with an unexpected medical bill, and this app came through for me when I needed it the most. The process was straightforward, and the funds hit my account within hours. Highly recommended!',
    },
    {
      id: 2,
      date: '02/08/2024',
      reviewerName: 'Jane Smith',
      reviewerInitials: 'JS',
      content:
        'I’ve used this app a few times now, and it never disappoints. The application process is super easy, and the approval is almost instant. Perfect for emergencies when you need quick cash without the hassle.',
    },
    {
      id: 3,
      date: '03/08/2024',
      reviewerName: 'Michael Johnson',
      reviewerInitials: 'MJ',
      content:
        'What I love most about this app is the transparency. The terms are clear, and there are no hidden fees. I knew exactly what I was getting into and felt confident borrowing. It’s a breath of fresh air compared to other lenders.',
    },
    {
      id: 4,
      date: '04/08/2024',
      reviewerName: 'Emily Davis',
      reviewerInitials: 'ED',
      content:
        'I was initially skeptical about taking a loan online, but the customer support team here was so helpful. They answered all my questions and made sure I understood everything. The app is user-friendly, and the repayment options are flexible.',
    },
    {
      id: 5,
      date: '05/08/2024',
      reviewerName: 'Chris Lee',
      reviewerInitials: 'CL',
      content:
        'I needed a small loan to cover some unexpected expenses, and this app made it so easy. The approval was fast, and the repayment terms were very reasonable. I’ve already recommended it to friends and family.',
    },
    {
      id: 6,
      date: '06/08/2024',
      reviewerName: 'Sarah Brown',
      reviewerInitials: 'SB',
      content:
        'This app is my go-to whenever I’m in a financial bind. It’s fast, reliable, and doesn’t leave you with a mountain of debt. The interest rates are fair, and the repayment plans fit my budget. I feel safe using this service.',
    },
  ];
}
