export default function ArticleCard(props: { title: string; href: string; description: string }) {
  return (
    <a
      href={props.href + "?utm_source=next-template"}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col border border-zinc-800 p-6 rounded-lg hover:bg-zinc-900 transition-all hover:border-zinc-700"
    >
      <article>
        <h2 className="text-lg font-semibold mb-2">{props.title}</h2>
        <p className="text-sm text-zinc-400">{props.description}</p>
      </article>
    </a>
  );
}
