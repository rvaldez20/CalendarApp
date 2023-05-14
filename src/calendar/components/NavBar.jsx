

export const NavBar = () => {
  return (
   <div className="navbar navbar-dark bg-dark mb-4 px-4">
      <span className="navbar-brand">
         <i className="fas fa-calendar-alt"></i>
         &nbsp;
         CentinelaCode
      </span>

      <button className="btn btn-outline-warning">
         <i className="fas fa-sign-out-alt"></i>
         <span>
            &nbsp;
            Salir
         </span>
      </button>
   </div>
  )
}
