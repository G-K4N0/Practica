import React from 'react'
import { useJwt } from 'react-jwt'

export const withAuth = (WrappedComponent) => {
  return class extends React.Component {
    state = {
      isLoading: true,
      isAuthenticated: false
    }

    componentDidMount () {
      const token = localStorage.getItem('token')
      try {
        useJwt.verify(token, 'secret')
        this.setState({ isLoading: false, isAuthenticated: true })
      } catch (err) {
        this.setState({ isLoading: false, isAuthenticated: false })
      }
    }

    render () {
      const { isLoading, isAuthenticated } = this.state

      if (isLoading) return null
      if (!isAuthenticated) return < redirect to="/login" />

      return <WrappedComponent {...this.props} />
    }
  }
}

export const Dashboard = () => {
  return (
    <div className='container-inicio'>
    <aside>
      <nav>
        <ul>
          <li>Inicio</li>
          <li>Usuarios</li>
          <li>Materias</li>
          <li>Carreras</li>
          <li>Labroratorios</li>
          <li>Horarios</li>
          <li>Avisos</li>
          <li>Estadisticas</li>
        </ul>
      </nav>
    </aside>
    <section>
      <article>
        article
      </article>
    </section>
    <aside>
      aside
    </aside>
  </div>
  )
}
