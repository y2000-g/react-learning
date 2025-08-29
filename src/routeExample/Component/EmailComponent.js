import styles from "../StylingModule/Input-style.module.css"

let EmailComponent = (prop) =>
{
    return <input 
                type="text" 
                placeholder={prop.placeholder}
                style={styles.input}/>
}
export default EmailComponent