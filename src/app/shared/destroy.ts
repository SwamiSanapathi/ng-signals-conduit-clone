import { DestroyRef, inject } from '@angular/core';
import { Subject } from 'rxjs';

export function $destroyRef() {
    const destroy = new Subject<void>();
    inject(DestroyRef).onDestroy(() => {
        destroy.next();
        destroy.complete();
        console.log('destroyed');
        
    });
    return destroy;
}