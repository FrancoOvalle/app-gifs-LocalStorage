import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  template: `
  <h5>Buscar:</h5>
  <input type="text"
  (keyup.enter)="searchTag( )"
  #txtTagInput
  class="form-control"
  placeholder="Buscar Gifs">
  `
})

export class SearchBoxComponent {
  @ViewChild('txtTagInput')
  tagInput !: ElementRef<HTMLInputElement>;

  constructor( private gifsServices: GifsService){ }

  searchTag (){
    const newTag = this.tagInput.nativeElement.value;
    this.gifsServices.searchTag(newTag);
    this.tagInput.nativeElement.value = "";

  }

}
