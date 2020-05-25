import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-views-home",
  templateUrl: "./views-home.component.html",
  styleUrls: ["./views-home.component.css"],
})
export class ViewsHomeComponent implements OnInit {
  stats = [
    { value: 22, label: "Users" },
    { value: 9, label: "Revenue" },
    { value: 500, label: "Reviews" },
  ];

  items = [
    {
      title: "Couch",
      description: "This is a couch",
      image: "/assets/images/couch.jpeg",
    },
    {
      title: "Dresser",
      description: "This is a dresser",
      image: "/assets/images/dresser.jpeg",
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
