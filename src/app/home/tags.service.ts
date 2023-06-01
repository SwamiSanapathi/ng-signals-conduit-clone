import { Injectable, signal } from "@angular/core";

@Injectable()

export class TagsService {
    readonly #tags = signal('')
}