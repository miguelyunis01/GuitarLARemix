import { useLoaderData } from '@remix-run/react'
import ListadoGuitarras from '~/components/listado-guitarras'
import { getGuitarras } from '~/models/guitarras.server'

export function meta() {
    return{
        title:'GuitarLA - Tienda de Guitarras',
        description: 'GuitarLA - Nuestra coleccion de guitarras'
    }
}

export async function loader(){
    const guitarras = await getGuitarras()
    
    return guitarras.data
}

const tienda = () => {

    const guitarras = useLoaderData()
    

    return (
            <ListadoGuitarras 
                guitarras={guitarras}
            />
    );
};

export default tienda;