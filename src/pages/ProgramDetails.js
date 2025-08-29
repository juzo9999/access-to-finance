import { useParams } from "react-router-dom"
import programs from "../data/programs"

export default function ProgramDetails() {
  const { id } = useParams()
  const program = programs.find((p) => p.id === id)

  if (!program) {
    return <p className="text-center py-12">Program not found.</p>
  }

  return (
    <section className="max-w-3xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-6 text-primary">{program.title}</h1>
      <p className="text-gray-700 whitespace-pre-line leading-relaxed">
        {program.details}
      </p>
    </section>
  )
}
