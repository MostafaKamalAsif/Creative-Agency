import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import BlogCard from '../BlogCard'
import BlogPost_1 from '/public/Blog_1.svg'
import BlogPost_2 from '/public/Blog_2.svg'
import BlogPost_3 from '/public/Blog_3.svg'

const Blog = () => {
  return (
    <>
    <div id='blog' className="pb-[100px]">
        <Container>
            <div>
            <h3 className="font-bold text-[40px] text-center">Our Letest News</h3>
            <p className="w-[542px] m-auto text-center pt-5 pb-12.5">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form.
            </p>
            <Flex className={'justify-between'}>
                <BlogCard imgsrc={BlogPost_1} alt={'Blog Post 1'}/>
                <BlogCard imgsrc={BlogPost_2} alt={'Blog Post 2'}/>
                <BlogCard imgsrc={BlogPost_3} alt={'Blog Post 3'}/>
            </Flex>
          </div>
        </Container>
    </div>

    </>
  )
}

export default Blog