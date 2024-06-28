import { Profile } from './../interfaces/profile.interface';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'heroImage'
})
export class HeroImagePipe implements PipeTransform {

    transform(profile: Profile): string {
        if (profile.img) {
            return 'assets/laboral.png'
        }

        return ''


    }

}
