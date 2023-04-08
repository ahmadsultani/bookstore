import { useRouter } from "next/router"

export default function BookDetail() {
  const { id } = useRouter().query;
  return (
    <div>{id}</div>
  )
}
