const Person = function(firstAndLast) {
    this.firstAndLast = firstAndLast
    this.firstName = undefined
    this.lastName = undefined
    
    this.getFullName = function() {
      return this.firstAndLast;
    };
  
    this.getFirstName = function() {
      return this.firstName || firstAndLast.split(' ')[0]
    }
  
    this.getLastName = function() {
      return this.lastName || firstAndLast.split(' ')[1]
    }
  
    Person.prototype.setFirstName = function(firstName) {
      this.firstAndLast = this.firstAndLast.split(' ')
      this.firstAndLast[0] = firstName
      this.firstName = firstName
      this.firstAndLast = this.firstAndLast.join(' ')
    }
  
    Person.prototype.setLastName = function(lastName) {
      this.firstAndLast = this.firstAndLast.split(' ')
      this.firstAndLast[1] = lastName
      this.lastName = lastName
      this.firstAndLast = this.firstAndLast.join(' ')
    }
  
    Person.prototype.setFullName = function(fullName) {
      this.firstName = fullName.split(' ')[0]
      this.lastName = fullName.split(' ')[1]
      this.firstAndLast = fullName
    }
  };