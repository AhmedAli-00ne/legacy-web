import { Component } from '@angular/core';

@Component({
  selector: 'app-service-module',
  templateUrl: './service-module.component.html',
  styleUrls: ['./service-module.component.scss']
})
export class ServiceModuleComponent {
  services = [
    {
      title: '',
      description: 'Personalized guidance to help you find the perfect property that matches your unique needs and lifestyle preferences.',
      icon: '• Tailored Property Consultation'
    },
    {
      title: '',
      description: 'Expert analysis and strategic advice to maximize your real estate investment returns and portfolio growth.',
      icon: '• Investment Advisory'
    },
    {
      title: '',
      description: 'Comprehensive oversight from conception to completion, ensuring seamless execution of your real estate projects.',
      icon: '• Full-Service Project Management'
    },
    {
      title: '',
      description: 'Creating vibrant communities with amenities and features that enhance quality of life for residents.',
      icon: '• Community & Lifestyle Enhancements'
    }
  ];

  onGetInTouch() {
    // Handle contact action - you can implement routing or modal opening here
    console.log('Get In Touch clicked');
  }

}
