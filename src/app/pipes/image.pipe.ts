import { Profile } from './../interfaces/profile.interface';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'heroImage'
})
export class HeroImagePipe implements PipeTransform {

    transform(profile: Profile): string {
        if (profile.img) {
            return '/assets/laboral.png '
        }

        console.log('error en la ruta de imagen')

        const error = 'no esta correcta la ruta '

        return error


    }

}
