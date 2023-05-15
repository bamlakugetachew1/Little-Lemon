function SingleFood(props){
   return(
       <div className="w-64 bg-slate-100 rounded-lg mb-5 ml-auto mr-auto md:ml-0 md:mr-0 hover:scale-105">
            <img
              className="rounded-lg"
              src={props.data.imageurl}
              alt="food item"
            />
            <div className="pl-3">
              <h3 className="mt-2 mb-2 font-medium text-2xl">{props.data.name}</h3>
              <h5 className="font-body">{props.data.description}</h5>
              <p className="mt-2 pb-12 font-medium">Order Deleviry</p>
            </div>
          </div>   );
}

export default SingleFood