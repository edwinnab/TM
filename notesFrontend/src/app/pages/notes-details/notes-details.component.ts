import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Note } from 'src/app/shared/note/note.model';
import { NotesService } from 'src/app/shared/notes.service';

@Component({
  selector: 'app-notes-details',
  templateUrl: './notes-details.component.html',
  styleUrls: ['./notes-details.component.scss']
})
export class NotesDetailsComponent implements OnInit {

  note: Note = new Note;
  new: boolean = false;

  constructor(private notesService: NotesService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    /*
    // we want find out if we are creating a new note or editing an existing one
    this.route.params.subscribe((params: Params) => {
      this.note = new Note();
      if (params.id) {
        this.notesService.get(params.id).subscribe((note: Note) => {
          this.note = note;
        });
        this.new = false;
      } else {
        this.new = true;
      }
    })*/
  }

  onSubmit(form: NgForm) {
    if (this.new) {
      // we should save the note
      this.notesService.add(form.value).subscribe((newNote) => {
      this.router.navigateByUrl('/');
      })
    } else {
      this.note.title = form.value.title;
      this.note.body = form.value.body;

      this.notesService.update(this.note).subscribe(() => {
        // this code will run once the note has been updated
        this.router.navigateByUrl('/');
      })
    }
    this.router.navigateByUrl('/')

  }

  cancel() {
    this.router.navigateByUrl('/');
  }

}
