import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements AfterViewInit, OnDestroy {
  
  ngAfterViewInit(): void {
    gsap.registerPlugin(ScrollTrigger);

    // Wait for Angular to fully render
    setTimeout(() => {
      console.log('Initializing animations...');
      
      // Set initial states
      gsap.set('#formSection', { opacity: 0, y: 50 });
      gsap.set('#formSection .form-row', { opacity: 0, y: 30 });
      gsap.set('#formSection textarea', { opacity: 0, y: 30 });
      gsap.set('#formSection .btn', { opacity: 0, scale: 0.8 });
      
      gsap.set('#locationSection', { opacity: 0, y: 60 });
      gsap.set('#locationSection .location-block', { opacity: 0, x: -50, scale: 0.9 });
      
      // Form Section Animation
      const formTl = gsap.timeline({
        scrollTrigger: {
          trigger: '#formSection',
          start: 'top 80%',
          toggleActions: 'play none none none',
          markers: false,
          onToggle: (self) => console.log('Form section:', self.isActive ? 'visible' : 'hidden')
        }
      });

      formTl
        .to('#formSection', {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out'
        })
        .to('#formSection .form-row', {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power2.out'
        }, '-=0.5')
        .to('#formSection textarea', {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power2.out'
        }, '-=0.3')
        .to('#formSection .btn', {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          ease: 'back.out(1.7)'
        }, '-=0.2');

      // Location Section Animation
      const locationTl = gsap.timeline({
        scrollTrigger: {
          trigger: '#locationSection',
          start: 'top 150%',
          toggleActions: 'play none none none',
          markers: false,
          onToggle: (self) => console.log('Location section:', self.isActive ? 'visible' : 'hidden')
        }
      });

      locationTl
        .to('#locationSection', {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out'
        })
        .to('#locationSection .location-block', {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power2.out'
        }, '-=0.5');

      // Add simple hover animations for location blocks
      document.querySelectorAll('.location-block').forEach((block) => {
        block.addEventListener('mouseenter', () => {
          gsap.to(block, { 
            y: -5, 
            boxShadow: '0 8px 30px rgba(0,0,0,0.12)',
            duration: 0.3, 
            ease: 'power2.out' 
          });
        });
        
        block.addEventListener('mouseleave', () => {
          gsap.to(block, { 
            y: 0, 
            boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
            duration: 0.3, 
            ease: 'power2.out' 
          });
        });
      });

      console.log('Animations ready');
    }, 500);
  }

  ngOnDestroy(): void {
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  }
}