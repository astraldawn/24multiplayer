import { Component, OnDestroy } from '@angular/core';
import { MdSnackBar } from '@angular/material';
import { Subscription } from 'rxjs/Subscription';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnDestroy {

  notificationSubscription: Subscription;

  constructor(public snackBar: MdSnackBar,
    private gameService: GameService) {
    this.notificationSubscription = gameService.notification$.subscribe(
      notification => {
        this.snackBar.open(notification.message, "", {
          duration: 3000
        })
      })
  }

  ngOnDestroy() {
    this.notificationSubscription.unsubscribe();
  }

}
