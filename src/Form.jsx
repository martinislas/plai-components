import './App.css'

function Form (){
    return<form method="post" action="#">
    
        <div>
            
            <div className="field">
                <label for="course-title">Course Title</label>
                <textarea name="textarea" id="course-title" placeholder="" rows="1"></textarea>

                <a href=""><i class="fa-solid fa-arrows-rotate"></i></a>
            </div>

            <div className="field">
                <label  for="course-overview">Course Overview</label>
                <textarea name="textarea" id="textarea course-overview" placeholder="" rows="6"></textarea>

                <a href=""><i className="fa-solid fa-arrows-rotate"></i></a>
            </div>

            <div className="field">

                <label  for="course-overview">Include materials</label>

                <input type="checkbox" class="form-check-input" id="exampleCheck1">
                </input>
            </div>

            <div className="field">

                <label  for="form-select">Multiple Options</label>

                <select class="form-select" aria-label="form-select">
                    <option selected>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
            </div>

            <div className="field">
                
                <label for="inputGroupFile01">Upload</label>

                <input type="file" className="form-control" id="inputGroupFile01"></input>

            </div>

            <div className='field-container'>    
                <button type="button" class="btn btn-primary" >Button</button>
            </div>

        </div>
    </form>
        
        
   
   
    
    
}

export default Form;