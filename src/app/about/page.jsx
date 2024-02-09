import React from 'react'

function AboutPage() {
  return (
    <section className="container mx-auto">
      <h3 className="text-4xl font-bold my-5">About</h3>
      <p className='text-2xl text-justify'>The developed project is a CRUD (Create, Read, Update, Delete) task management system implemented using Next.js as the React framework, PostgreSQL as the relational database, and Prisma ORM to facilitate database operations. This system allows users to manage their tasks efficiently and organized.</p>
    </section>
  )
}

export default AboutPage