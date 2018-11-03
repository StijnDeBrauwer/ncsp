import { Injectable } from '@angular/core';
import { SolutionBefenitType } from '../../models/solution-benfit-type';
import { SolutionType } from '../../models/solution-type.model';
import { SolutionModel } from '../../models/solution.model';

@Injectable({
  providedIn: 'root'
})
export class SolutionService {

  constructor() { }

  loadSolutions(type: SolutionType, benefit: SolutionBefenitType){
    switch(type){
      case SolutionType.BOTTLE_WASHERS: {
         return this.loadBottleWasherSolutions(benefit);
      }

      case SolutionType.FILTERS: {
        return this.loadFillerSolutions(benefit);

      }

      case SolutionType.OTHERS: {
      return this.loadOtherSolutions(benefit);
      }
    }
  }

  private loadBottleWasherSolutions(benfit){
    switch(benfit){
      case SolutionBefenitType.PERFORMANCE :{
        return [
          new SolutionModel("Performance solution", SolutionType.BOTTLE_WASHERS, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dignissim tincidunt turpis nec consequat. Vestibulum commodo scelerisque metus ut accumsan. Fusce eleifend erat at purus facilisis, congue semper nisl iaculis. Mauris vel congue quam. Curabitur lacus nisl, ullamcorper et dolor vel, hendrerit tincidunt nisi. Vestibulum tempor fringilla nisl nec lacinia. Nullam ut efficitur enim, quis ornare orci. Integer ornare odio vel metus lobortis varius. Etiam sit amet nisi tincidunt, viverra diam et, ultrices sapien. Donec laoreet felis a diam volutpat tempor. Integer ornare auctor ipsum, vitae finibus nibh", null, 123),
          new SolutionModel("Performance solution 2", SolutionType.BOTTLE_WASHERS, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dignissim tincidunt turpis nec consequat. Vestibulum commodo scelerisque metus ut accumsan. Fusce eleifend erat at purus facilisis, congue semper nisl iaculis. Mauris vel congue quam. Curabitur lacus nisl, ullamcorper et dolor vel, hendrerit tincidunt nisi. Vestibulum tempor fringilla nisl nec lacinia. Nullam ut efficitur enim, quis ornare orci. Integer ornare odio vel metus lobortis varius. Etiam sit amet nisi tincidunt, viverra diam et, ultrices sapien. Donec laoreet felis a diam volutpat tempor. Integer ornare auctor ipsum, vitae finibus nibh", null, 123)
        ]
      }

      case SolutionBefenitType.HYGIENE :{
        return [
          new SolutionModel("Hygiene solution", SolutionType.BOTTLE_WASHERS, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dignissim tincidunt turpis nec consequat. Vestibulum commodo scelerisque metus ut accumsan. Fusce eleifend erat at purus facilisis, congue semper nisl iaculis. Mauris vel congue quam. Curabitur lacus nisl, ullamcorper et dolor vel, hendrerit tincidunt nisi. Vestibulum tempor fringilla nisl nec lacinia. Nullam ut efficitur enim, quis ornare orci. Integer ornare odio vel metus lobortis varius. Etiam sit amet nisi tincidunt, viverra diam et, ultrices sapien. Donec laoreet felis a diam volutpat tempor. Integer ornare auctor ipsum, vitae finibus nibh", null, 123),
          new SolutionModel("Hygiene solution 2", SolutionType.BOTTLE_WASHERS, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dignissim tincidunt turpis nec consequat. Vestibulum commodo scelerisque metus ut accumsan. Fusce eleifend erat at purus facilisis, congue semper nisl iaculis. Mauris vel congue quam. Curabitur lacus nisl, ullamcorper et dolor vel, hendrerit tincidunt nisi. Vestibulum tempor fringilla nisl nec lacinia. Nullam ut efficitur enim, quis ornare orci. Integer ornare odio vel metus lobortis varius. Etiam sit amet nisi tincidunt, viverra diam et, ultrices sapien. Donec laoreet felis a diam volutpat tempor. Integer ornare auctor ipsum, vitae finibus nibh", null, 123)
        ]
      }

      case SolutionBefenitType.WATER_ENERGY :{
        return [
          new SolutionModel("Water solution", SolutionType.BOTTLE_WASHERS, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dignissim tincidunt turpis nec consequat. Vestibulum commodo scelerisque metus ut accumsan. Fusce eleifend erat at purus facilisis, congue semper nisl iaculis. Mauris vel congue quam. Curabitur lacus nisl, ullamcorper et dolor vel, hendrerit tincidunt nisi. Vestibulum tempor fringilla nisl nec lacinia. Nullam ut efficitur enim, quis ornare orci. Integer ornare odio vel metus lobortis varius. Etiam sit amet nisi tincidunt, viverra diam et, ultrices sapien. Donec laoreet felis a diam volutpat tempor. Integer ornare auctor ipsum, vitae finibus nibh", null, 123),
          new SolutionModel("Energy solution 2", SolutionType.BOTTLE_WASHERS, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dignissim tincidunt turpis nec consequat. Vestibulum commodo scelerisque metus ut accumsan. Fusce eleifend erat at purus facilisis, congue semper nisl iaculis. Mauris vel congue quam. Curabitur lacus nisl, ullamcorper et dolor vel, hendrerit tincidunt nisi. Vestibulum tempor fringilla nisl nec lacinia. Nullam ut efficitur enim, quis ornare orci. Integer ornare odio vel metus lobortis varius. Etiam sit amet nisi tincidunt, viverra diam et, ultrices sapien. Donec laoreet felis a diam volutpat tempor. Integer ornare auctor ipsum, vitae finibus nibh", null, 123)
        ]
      }

      case SolutionBefenitType.COSTS :{
        return [
          new SolutionModel("Costs solution", SolutionType.BOTTLE_WASHERS, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dignissim tincidunt turpis nec consequat. Vestibulum commodo scelerisque metus ut accumsan. Fusce eleifend erat at purus facilisis, congue semper nisl iaculis. Mauris vel congue quam. Curabitur lacus nisl, ullamcorper et dolor vel, hendrerit tincidunt nisi. Vestibulum tempor fringilla nisl nec lacinia. Nullam ut efficitur enim, quis ornare orci. Integer ornare odio vel metus lobortis varius. Etiam sit amet nisi tincidunt, viverra diam et, ultrices sapien. Donec laoreet felis a diam volutpat tempor. Integer ornare auctor ipsum, vitae finibus nibh", null, 123),
          new SolutionModel("Costs solution 2", SolutionType.BOTTLE_WASHERS, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dignissim tincidunt turpis nec consequat. Vestibulum commodo scelerisque metus ut accumsan. Fusce eleifend erat at purus facilisis, congue semper nisl iaculis. Mauris vel congue quam. Curabitur lacus nisl, ullamcorper et dolor vel, hendrerit tincidunt nisi. Vestibulum tempor fringilla nisl nec lacinia. Nullam ut efficitur enim, quis ornare orci. Integer ornare odio vel metus lobortis varius. Etiam sit amet nisi tincidunt, viverra diam et, ultrices sapien. Donec laoreet felis a diam volutpat tempor. Integer ornare auctor ipsum, vitae finibus nibh", null, 123)
        ]
      }
    }
  }

  private loadFillerSolutions(benfit){
    switch(benfit){
      case SolutionBefenitType.PERFORMANCE :{
        return [
          new SolutionModel("Performance solution (fillers)", SolutionType.FILTERS, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dignissim tincidunt turpis nec consequat. Vestibulum commodo scelerisque metus ut accumsan. Fusce eleifend erat at purus facilisis, congue semper nisl iaculis. Mauris vel congue quam. Curabitur lacus nisl, ullamcorper et dolor vel, hendrerit tincidunt nisi. Vestibulum tempor fringilla nisl nec lacinia. Nullam ut efficitur enim, quis ornare orci. Integer ornare odio vel metus lobortis varius. Etiam sit amet nisi tincidunt, viverra diam et, ultrices sapien. Donec laoreet felis a diam volutpat tempor. Integer ornare auctor ipsum, vitae finibus nibh", null, 123),
          new SolutionModel("Performance solution 2 (fillers)", SolutionType.FILTERS, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dignissim tincidunt turpis nec consequat. Vestibulum commodo scelerisque metus ut accumsan. Fusce eleifend erat at purus facilisis, congue semper nisl iaculis. Mauris vel congue quam. Curabitur lacus nisl, ullamcorper et dolor vel, hendrerit tincidunt nisi. Vestibulum tempor fringilla nisl nec lacinia. Nullam ut efficitur enim, quis ornare orci. Integer ornare odio vel metus lobortis varius. Etiam sit amet nisi tincidunt, viverra diam et, ultrices sapien. Donec laoreet felis a diam volutpat tempor. Integer ornare auctor ipsum, vitae finibus nibh", null, 123)
        ]
      }

      case SolutionBefenitType.HYGIENE :{
        return [
          new SolutionModel("Hygiene solution (fillers)", SolutionType.FILTERS, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dignissim tincidunt turpis nec consequat. Vestibulum commodo scelerisque metus ut accumsan. Fusce eleifend erat at purus facilisis, congue semper nisl iaculis. Mauris vel congue quam. Curabitur lacus nisl, ullamcorper et dolor vel, hendrerit tincidunt nisi. Vestibulum tempor fringilla nisl nec lacinia. Nullam ut efficitur enim, quis ornare orci. Integer ornare odio vel metus lobortis varius. Etiam sit amet nisi tincidunt, viverra diam et, ultrices sapien. Donec laoreet felis a diam volutpat tempor. Integer ornare auctor ipsum, vitae finibus nibh", null, 123),
          new SolutionModel("Hygiene solution 2 (fillers)", SolutionType.FILTERS, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dignissim tincidunt turpis nec consequat. Vestibulum commodo scelerisque metus ut accumsan. Fusce eleifend erat at purus facilisis, congue semper nisl iaculis. Mauris vel congue quam. Curabitur lacus nisl, ullamcorper et dolor vel, hendrerit tincidunt nisi. Vestibulum tempor fringilla nisl nec lacinia. Nullam ut efficitur enim, quis ornare orci. Integer ornare odio vel metus lobortis varius. Etiam sit amet nisi tincidunt, viverra diam et, ultrices sapien. Donec laoreet felis a diam volutpat tempor. Integer ornare auctor ipsum, vitae finibus nibh", null, 123)
        ]
      }

      case SolutionBefenitType.WATER_ENERGY :{
        return [
          new SolutionModel("Water solution (fillers)", SolutionType.FILTERS, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dignissim tincidunt turpis nec consequat. Vestibulum commodo scelerisque metus ut accumsan. Fusce eleifend erat at purus facilisis, congue semper nisl iaculis. Mauris vel congue quam. Curabitur lacus nisl, ullamcorper et dolor vel, hendrerit tincidunt nisi. Vestibulum tempor fringilla nisl nec lacinia. Nullam ut efficitur enim, quis ornare orci. Integer ornare odio vel metus lobortis varius. Etiam sit amet nisi tincidunt, viverra diam et, ultrices sapien. Donec laoreet felis a diam volutpat tempor. Integer ornare auctor ipsum, vitae finibus nibh", null, 123),
          new SolutionModel("Energy solution 2 (fillers)", SolutionType.FILTERS, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dignissim tincidunt turpis nec consequat. Vestibulum commodo scelerisque metus ut accumsan. Fusce eleifend erat at purus facilisis, congue semper nisl iaculis. Mauris vel congue quam. Curabitur lacus nisl, ullamcorper et dolor vel, hendrerit tincidunt nisi. Vestibulum tempor fringilla nisl nec lacinia. Nullam ut efficitur enim, quis ornare orci. Integer ornare odio vel metus lobortis varius. Etiam sit amet nisi tincidunt, viverra diam et, ultrices sapien. Donec laoreet felis a diam volutpat tempor. Integer ornare auctor ipsum, vitae finibus nibh", null, 123)
        ]
      }

      case SolutionBefenitType.COSTS :{
        return [
          new SolutionModel("Costs solution", SolutionType.BOTTLE_WASHERS, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dignissim tincidunt turpis nec consequat. Vestibulum commodo scelerisque metus ut accumsan. Fusce eleifend erat at purus facilisis, congue semper nisl iaculis. Mauris vel congue quam. Curabitur lacus nisl, ullamcorper et dolor vel, hendrerit tincidunt nisi. Vestibulum tempor fringilla nisl nec lacinia. Nullam ut efficitur enim, quis ornare orci. Integer ornare odio vel metus lobortis varius. Etiam sit amet nisi tincidunt, viverra diam et, ultrices sapien. Donec laoreet felis a diam volutpat tempor. Integer ornare auctor ipsum, vitae finibus nibh", null, 123),
          new SolutionModel("Costs solution 2", SolutionType.BOTTLE_WASHERS, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dignissim tincidunt turpis nec consequat. Vestibulum commodo scelerisque metus ut accumsan. Fusce eleifend erat at purus facilisis, congue semper nisl iaculis. Mauris vel congue quam. Curabitur lacus nisl, ullamcorper et dolor vel, hendrerit tincidunt nisi. Vestibulum tempor fringilla nisl nec lacinia. Nullam ut efficitur enim, quis ornare orci. Integer ornare odio vel metus lobortis varius. Etiam sit amet nisi tincidunt, viverra diam et, ultrices sapien. Donec laoreet felis a diam volutpat tempor. Integer ornare auctor ipsum, vitae finibus nibh", null, 123)
        ]
      }
    }

  }

  private loadOtherSolutions(benfit){
    switch(benfit){
      case SolutionBefenitType.PERFORMANCE :{
        return [
          new SolutionModel("Performance solution (others)", SolutionType.OTHERS, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dignissim tincidunt turpis nec consequat. Vestibulum commodo scelerisque metus ut accumsan. Fusce eleifend erat at purus facilisis, congue semper nisl iaculis. Mauris vel congue quam. Curabitur lacus nisl, ullamcorper et dolor vel, hendrerit tincidunt nisi. Vestibulum tempor fringilla nisl nec lacinia. Nullam ut efficitur enim, quis ornare orci. Integer ornare odio vel metus lobortis varius. Etiam sit amet nisi tincidunt, viverra diam et, ultrices sapien. Donec laoreet felis a diam volutpat tempor. Integer ornare auctor ipsum, vitae finibus nibh", null, 123),
          new SolutionModel("Performance solution 2 (others)", SolutionType.OTHERS, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dignissim tincidunt turpis nec consequat. Vestibulum commodo scelerisque metus ut accumsan. Fusce eleifend erat at purus facilisis, congue semper nisl iaculis. Mauris vel congue quam. Curabitur lacus nisl, ullamcorper et dolor vel, hendrerit tincidunt nisi. Vestibulum tempor fringilla nisl nec lacinia. Nullam ut efficitur enim, quis ornare orci. Integer ornare odio vel metus lobortis varius. Etiam sit amet nisi tincidunt, viverra diam et, ultrices sapien. Donec laoreet felis a diam volutpat tempor. Integer ornare auctor ipsum, vitae finibus nibh", null, 123)
        ]
      }

      case SolutionBefenitType.HYGIENE :{
        return [
          new SolutionModel("Hygiene solution (others)", SolutionType.OTHERS, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dignissim tincidunt turpis nec consequat. Vestibulum commodo scelerisque metus ut accumsan. Fusce eleifend erat at purus facilisis, congue semper nisl iaculis. Mauris vel congue quam. Curabitur lacus nisl, ullamcorper et dolor vel, hendrerit tincidunt nisi. Vestibulum tempor fringilla nisl nec lacinia. Nullam ut efficitur enim, quis ornare orci. Integer ornare odio vel metus lobortis varius. Etiam sit amet nisi tincidunt, viverra diam et, ultrices sapien. Donec laoreet felis a diam volutpat tempor. Integer ornare auctor ipsum, vitae finibus nibh", null, 123),
          new SolutionModel("Hygiene solution 2 (others)", SolutionType.OTHERS, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dignissim tincidunt turpis nec consequat. Vestibulum commodo scelerisque metus ut accumsan. Fusce eleifend erat at purus facilisis, congue semper nisl iaculis. Mauris vel congue quam. Curabitur lacus nisl, ullamcorper et dolor vel, hendrerit tincidunt nisi. Vestibulum tempor fringilla nisl nec lacinia. Nullam ut efficitur enim, quis ornare orci. Integer ornare odio vel metus lobortis varius. Etiam sit amet nisi tincidunt, viverra diam et, ultrices sapien. Donec laoreet felis a diam volutpat tempor. Integer ornare auctor ipsum, vitae finibus nibh", null, 123)
        ]
      }

      case SolutionBefenitType.WATER_ENERGY :{
        return [
          new SolutionModel("Water solution (Others)", SolutionType.OTHERS, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dignissim tincidunt turpis nec consequat. Vestibulum commodo scelerisque metus ut accumsan. Fusce eleifend erat at purus facilisis, congue semper nisl iaculis. Mauris vel congue quam. Curabitur lacus nisl, ullamcorper et dolor vel, hendrerit tincidunt nisi. Vestibulum tempor fringilla nisl nec lacinia. Nullam ut efficitur enim, quis ornare orci. Integer ornare odio vel metus lobortis varius. Etiam sit amet nisi tincidunt, viverra diam et, ultrices sapien. Donec laoreet felis a diam volutpat tempor. Integer ornare auctor ipsum, vitae finibus nibh", null, 123),
          new SolutionModel("Energy solution 2 (Others)", SolutionType.OTHERS, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dignissim tincidunt turpis nec consequat. Vestibulum commodo scelerisque metus ut accumsan. Fusce eleifend erat at purus facilisis, congue semper nisl iaculis. Mauris vel congue quam. Curabitur lacus nisl, ullamcorper et dolor vel, hendrerit tincidunt nisi. Vestibulum tempor fringilla nisl nec lacinia. Nullam ut efficitur enim, quis ornare orci. Integer ornare odio vel metus lobortis varius. Etiam sit amet nisi tincidunt, viverra diam et, ultrices sapien. Donec laoreet felis a diam volutpat tempor. Integer ornare auctor ipsum, vitae finibus nibh", null, 123)
        ]
      }

      case SolutionBefenitType.COSTS :{
        return [
          new SolutionModel("Costs solution (Others)", SolutionType.OTHERS, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dignissim tincidunt turpis nec consequat. Vestibulum commodo scelerisque metus ut accumsan. Fusce eleifend erat at purus facilisis, congue semper nisl iaculis. Mauris vel congue quam. Curabitur lacus nisl, ullamcorper et dolor vel, hendrerit tincidunt nisi. Vestibulum tempor fringilla nisl nec lacinia. Nullam ut efficitur enim, quis ornare orci. Integer ornare odio vel metus lobortis varius. Etiam sit amet nisi tincidunt, viverra diam et, ultrices sapien. Donec laoreet felis a diam volutpat tempor. Integer ornare auctor ipsum, vitae finibus nibh", null, 123),
          new SolutionModel("Costs solution 2 (Others)", SolutionType.OTHERS, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dignissim tincidunt turpis nec consequat. Vestibulum commodo scelerisque metus ut accumsan. Fusce eleifend erat at purus facilisis, congue semper nisl iaculis. Mauris vel congue quam. Curabitur lacus nisl, ullamcorper et dolor vel, hendrerit tincidunt nisi. Vestibulum tempor fringilla nisl nec lacinia. Nullam ut efficitur enim, quis ornare orci. Integer ornare odio vel metus lobortis varius. Etiam sit amet nisi tincidunt, viverra diam et, ultrices sapien. Donec laoreet felis a diam volutpat tempor. Integer ornare auctor ipsum, vitae finibus nibh", null, 123)
        ]
      }
    }

  }


}
