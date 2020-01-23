import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }
  @Input()
  public text = '';
  public closeHide = true;

  hide(){
    this.closeHide = false;
  }
}
