import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
export default function BlogInfoCard(){
    const { selectedBlog } = useSelector(state => state.selectedBlog)
console.log(selectedBlog);


const { language } = useSelector(state => state.language)
const [blogAll, setBlogAll ] = useState([])
useEffect(() => {
    console.log(language);
    // const getUsers = async () => {
      fetch('http://logicbackend-001-site1.htempurl.com/api/Post/translation/', {
        headers: {
            'languageId': language ? language : 1
        }
      })
      .then(res => res.json())
      .then(data => {console.log(data);
        setBlogAll(data)})
      .catch(err => console.log(err))
    // }
    // getUsers()
}, [language])

    return(
        <>
        {selectedBlog.translations[0].title}
        </>
    )
}