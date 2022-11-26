import { MainLayout } from "../../layouts/MainLayout";
import Router from "next/router";

export default function Info() {
  return (
    <MainLayout>
      <h1>Info page</h1>
      <button onClick={() => Router.push('/about')}>
        Go to about page
      </button>
    </MainLayout>
  )
}