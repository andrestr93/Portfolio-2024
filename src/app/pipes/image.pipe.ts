import { Profile } from './../interfaces/profile.interface';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'heroImage'
})
export class HeroImagePipe implements PipeTransform {

    transform(profile: Profile): string {
        if (profile.img) {
            return 'portfolio-2024/assets/laboral.png'
        }

        const error = 'no esta correcta la ruta '

        return error


    }

}
