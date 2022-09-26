import {
  Component,
  OnInit,
} from "@angular/core";
import { GeneratorService } from "src/app/services/generator.service";

@Component({
  selector: "app-generator",
  templateUrl: "./generator.component.html",
  styleUrls: ["./generator.component.css"],
})
export class GeneratorComponent implements OnInit {
  generateList?: any;
  generatedNumber?: any;
  pager: any = {};


  constructor(private generateService: GeneratorService) {}

  ngOnInit() {
    this.getAllResults();
  }

  getAllResults() {
    this.generateService.getAll().subscribe((data) => {
      this.generateList = data;
      sessionStorage.setItem("next", this.generateList.next);
      sessionStorage.setItem("prev", this.generateList.previous);
    });
  }

  getAllResultsNext() {
    this.generateService.getAllNext().subscribe((data) => {
      this.generateList = data;
      sessionStorage.setItem("next", this.generateList.next);
      sessionStorage.setItem("prev", this.generateList.previous);
    });
  }

  getAllResultsPrev() {
    this.generateService.getAllPrev().subscribe((data) => {
      this.generateList = data;
      sessionStorage.setItem("next", this.generateList.next);
      sessionStorage.setItem("prev", this.generateList.previous);
    });
  }

  generateRandom() {
    this.generateService.generate().subscribe((data) => {
      this.generatedNumber = data;
      alert("Generated Number: " + this.generatedNumber?.value);
    });
    this.getAllResults();
  }
}

