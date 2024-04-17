import { useLoaderData } from "react-router-dom"
import Header from "../components/header"
import { AppConfig } from "../@types/types"
import { useEffect } from "react";

export default function Home() {
  const data: AppConfig = useLoaderData() as AppConfig
  useEffect(() => {
    document.title = "Home - " + data.name
 }, [data.name]);
  return (
    <div className="container">
      <div className="hero">
        <Header data={data.menu} />
        <div className="hero__content fade_in">
          <h1 id="name">{data.name}</h1>
          <h2 id="description">{data.description}</h2>
        </div>
        <footer className="footer">
          <p>@2024 Carlos Rodrigues</p>
        </footer>
      </div>
    </div>
  )
}