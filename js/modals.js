function modals(){
    swal({
        title: "Estas Seguro?",
        text: "Este link es esterno a VictorPortfolio.com",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
          swal("Redirigiendo a IlernaHub.com", {
            icon: "success",
          });
        } 
      });
}