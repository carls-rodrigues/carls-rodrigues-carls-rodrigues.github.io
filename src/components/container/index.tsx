import Footer from '../footer';
import './container.css'
import { PropsWithChildren } from "react";

export default function Container({ children}: PropsWithChildren) {
  return (
    <div className="container">
      {children}
      <Footer />
    </div>
  )
}