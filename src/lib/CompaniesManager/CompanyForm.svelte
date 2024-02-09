<script>
  import {currentCompany} from "../js/currentCompanyStore.js";
</script>

<form>
  <label for="companyName">Название компании</label>
  <input type="text" id="companyName" bind:value={currentCompany.name}/>
  <button type="submit">Сохранить</button>
</form>