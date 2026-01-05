import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        My Portfolio
      </h1>
      <p className="mb-4">I'm Keerthana Sunder, in short - Keer. This page is my open space to write about stuff that interest me.</p>
      <p className="mb-4">I'm a software engineer by profession, so I'm making a habit to read industry research papers and write my thoughts on them, because when I was a kid, my parents used to say - writing something instead of plain reading increases the remembrance power by 10 times and I believe that!</p>
      <p className="mb-4">Apart from that, I write poetry. I'm planning to move poetry writing from Instagram to this.</p>
      <p className="mb-4">I also am keeping another section for writing about other stuff, probably about my good and rough days, hobbies, music, maybe life?</p>

      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
