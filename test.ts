// Method Handle Error Known
  // You can add any Error you wawnt in Commun folder then use it here
  private handleError(error : Response){
    switch (error.status) {
      case 404: {
        return throwError(() => new NotFoundError(error));
      }
      case 400: {
        return throwError(() => new BadInput(error));
      }
      case 500: {
        return "creez des autres erreur";
      }
      case 403:{
        return "you tried to go to is forbidden and that you are not supposed to access it.";
      }
      default: {
        return throwError(() =>new AppError());
      }
    }
  }
