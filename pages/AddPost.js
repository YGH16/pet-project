import { Input } from '@chakra-ui/react'
const AddPost = () => {
    return ( 
        <div>
            <form>
                <Input placeholder='Title' variant="outline" />
                <Input placeholder='Content' variant="outline" />
            </form>
        </div>
     );
}
 
export default AddPost;