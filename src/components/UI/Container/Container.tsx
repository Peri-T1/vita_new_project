
import classes from './Container.module.scss' 
import { ReactNode, FC } from 'react'

interface ContainerProps {
    children: ReactNode
}

export const Container:FC<ContainerProps> = (props) => {

    const {children} = props
 return(

    <div className={classes.container}>
        {children}
    </div>
 )

}