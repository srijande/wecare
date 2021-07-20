from django.db import models
from django.contrib.auth.models import AbstractUser, AbstractBaseUser, BaseUserManager, PermissionsMixin


# class MyUserManager(BaseUserManager):
#     def create_user(self, mobile, password=None):
#         if not mobile:
#             raise ValueError('Users must have an mobile')

#         user = self.model(
#             mobile=mobile,
#         )

#         user.save(using=self._db)
#         return user

#     def create_superuser(self, mobile, password=None):
#         user = self.model(
#             mobile=mobile
#         )
#         user.is_admin = True
#         print(password)
#         user.set_password(password)
#         user.save(using=self._db)
#         return user


# # Create your models here.
# class User(AbstractUser):
#     name = models.CharField(max_length=255)
#     mobile = models.IntegerField(unique=True)
#     password = models.CharField(max_length=255)
#     username = None

#     USERNAME_FIELD = 'mobile'
#     REQUIRED_FIELDS = []