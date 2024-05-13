import { Component } from '@angular/core';
import { animate, group, keyframes, state, style, transition, trigger } from "@angular/animations";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [
    trigger('divState', [
      state('normal', style({
        backgroundColor: '#fe4183',
        transform: 'translateX(0)'
      })),
      state('highlighted', style({
        backgroundColor: '#8244af',
        transform: 'translateX(100px)'
      })),
      transition('normal <=> highlighted', animate(800)),
      // transition('normal => highlighted', [
      //   // style({
      //   //   backgroundColor: '#fe9183',
      //   //   transform: 'translateX(0)'
      //   // }),
      //   animate(300, style({
      //     backgroundColor: '#12a4af',
      //     transform: 'translateX(100px)'
      //   }))
      // ]),
      // transition('highlighted  => normal', [
      //   style({
      //     backgroundColor: '#12a4af',
      //     transform: 'translateX(100px)'
      //   }),
      //   animate(800, style({
      //     backgroundColor: '#fe9183',
      //     transform: 'translateX(0)'
      //   }))
      ]),
      trigger('wildState', [
        state('normal', style({
          backgroundColor: '#fe4183',
          transform: 'translateX(0) scale(1)',
          borderRadius: 0
        })),
        state('highlighted', style({
          backgroundColor: '#a2f45f',
          transform: 'translateX(100px) scale(1)',
          borderRadius: 0
        })),
        state('shrunken', style({
          backgroundColor: '#8244af',
          transform: 'translateX(0) scale(0.5)',
          borderRadius: 0
        })),

        transition('normal => highlighted', animate(300)),
        transition('highlighted => normal', animate(800)),
        transition('shrunken <=> *', [
          style({
            backgroundColor: 'orange'
          }),
          animate(1000, style({
            borderRadius: '50px'
          })),

          animate(500)
        ])
    ]),
    trigger('list1', [
      state('in', style({
        opacity: 1,
        transform: 'translateX(0)'
      })),
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'translateX(-100px)'
        }),
        animate(800)
      ]),
      transition('* => void', [
        animate(800, style({
          opacity: 0,
          transform: 'translateX(100px)'
        })),
      ]),
    ]),
    trigger('list2', [
      state('in', style({
        opacity: 1,
        transform: 'translateX(0)'
      })),
      transition('void => *', [
        animate(1000, keyframes([
          style({
            transform: 'translateX(-100px)',
            opacity: 0,
            offset: 0
          }),
          style({
            transform: 'translateX(-50px)',
            opacity: 0.5,
            offset: 0.3
          }),
          style({
            transform: 'translateX(-20px)',
            opacity: 1,
            offset: 0.8
          }),
          style({
            transform: 'translateX(0)',
            opacity: 1,
            offset: 1
          }),

        ]))
        ]
        ),
      transition('* => void', [
        group([
          animate(300, style({
            color: 'red'
          })),
          animate(800, style({
            opacity: 0,
            transform: 'translateX(100px)'
          })),

        ]),
      ]),
    ]),
  ]
})
export class AppComponent {
  state = 'normal';
  wildState = 'normal';
  list1 ='void';
  list2 ='void';
  list = ['Milk', 'Sugar', 'Bread'];


  onAnimate() {
    this.state == 'normal' ? this.state = 'highlighted' : this.state = 'normal';
    this.wildState == 'normal' ? this.wildState = 'highlighted' : this.wildState = 'normal';
  }

  onShrink() {
    this.wildState = 'shrunken';
  }

    onAdd(item) {
      this.list.push(item);
      this.list1 = 'in';
      this.list2 = 'in';
    }

    onDelete(item) {
      this.list.splice(this.list.indexOf(item), 1);
      this.list1 = '';
      this.list2 = '';
    }

    animationStarted(event) {
      console.log(event);
    }

    animationEnded(event) {
      console.log(event);
    }
}
