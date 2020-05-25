import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-mods-home",
  templateUrl: "./mods-home.component.html",
  styleUrls: ["./mods-home.component.css"],
})
export class ModsHomeComponent implements OnInit {
  modalOpen: boolean = false;
  accordionData = [
    {
      title: "Why is the sky blue",
      content: "Because of air and because I want it",
    },
    {
      title: "What does an orange taste like?",
      content: "Like an orange, of course it tastes like an orange",
    },
    {
      title: "What color has the cat?",
      content: "The cat has no color",
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  onClick() {
    this.modalOpen = !this.modalOpen;
  }
}
