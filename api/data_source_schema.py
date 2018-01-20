from graphene_sqlalchemy import SQLAlchemyObjectType
from database.data_source import DataSourceType as DataSourceTypeModel, DataSource as DataSourceModel
import graphene


class DataSourceType(SQLAlchemyObjectType):
    class Meta:
        model = DataSourceTypeModel
        interfaces = (graphene.relay.Node,)  # Keep comma to avoid failure


class DataSource(SQLAlchemyObjectType):
    class Meta:
        model = DataSourceModel
        interfaces = (graphene.relay.Node,)  # Keep comma to avoid failure
