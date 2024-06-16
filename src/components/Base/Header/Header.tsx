import { Link } from "react-router-dom"
import { Container } from "../../UI/Container/Container" 

const navBar = [ 
    {
    title: 'posts',
    url:'/posts'
    },
    {
    title: 'comments',
    url:'/comments'
    },
    {
    title: 'albums',
    url:'/albums'
    },
    {
    title: 'photos',
    url:'/photos'
    },
    {
    title: 'users',
    url:'/users'
    }
]

export const Header = () => {

    

    return(
        <>
        <Container>
            <nav>
                {navBar.map((navEl, i) => (
                    <Link to={navEl.url} key={i}>{navEl.title}</Link>
                ))}
            </nav>
            </Container></>
    )
}