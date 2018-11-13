import React from 'react';

const TableRow = (props) => {
  const {usuarios, hide} = props;
  const list = usuarios.map(user => {
    return(
     	<li key={user.id}>
            <div className="row">
      			<div className="col s5">
                   <div className="left" name="name">{user.name} {user.lastname}</div> 
                </div>
				{hide === true ? (
  					<div className="col s5">
   					 </div>
  				) : (
  					<div className="col s5">
						<div className="left" name="gamesPlayed">{user.gamesPlayed}</div> 
   					 </div>
  				)}
            </div>
     	</li>
    )
  });
  return (
    <div>
    	<ul>
    		{list}
    	</ul>
    </div>
  );
}

export default TableRow;
