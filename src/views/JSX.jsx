// import styled from 'styled-components-vue'
// const Wrapper = styled.div`
//     background-color:orange;
//     width:100px;
//     height:100px;
//     color:red;  
// `;
export default {
    render(){
        return (
            // <Wrapper>{this.msg}</Wrapper>
            <div class="w-[100px] h-[100px] bg-red-500 text-center">{this.msg}</div>
        )
    },
    data(){
        return {
            msg:'hello jsx!'
        }
    }
}